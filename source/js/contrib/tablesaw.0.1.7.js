/*! Tablesaw - v0.1.7 - 2014-10-22
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2014 Filament Group; Licensed MIT */
;(function( $ ) {

  var $doc = $( document.documentElement );

  // Cut the mustard
  if( !( 'querySelector' in document ) ||
      ( window.blackberry && !window.WebKitPoint ) ||
      window.operamini ) {
    return;
  } else {
    $doc.addClass( 'tablesaw-enhanced' );

    // DOM-ready auto-init of plugins.
    // Many plugins bind to an "enhance" event to init themselves on dom ready, or when new markup is inserted into the DOM
    $( function(){
      $( document ).trigger( "enhance.tablesaw" );
    });
  }

})( jQuery );
;(function( $ ) {
  var pluginName = "table",
    classes = {
      toolbar: "tablesaw-bar"
    },
    events = {
      create: "tablesawcreate",
      destroy: "tablesawdestroy",
      refresh: "tablesawrefresh"
    },
    defaultMode = "stack",
    initSelector = "table[data-mode],table[data-sortable]";

  var Table = function( element ) {
    if( !element ) {
      throw new Error( "Tablesaw requires an element." );
    }

    this.table = element;
    this.$table = $( element );

    this.mode = this.$table.attr( "data-mode" ) || defaultMode;

    this.init();
  };

  Table.prototype.init = function() {
    // assign an id if there is none
    if ( !this.$table.attr( "id" ) ) {
      this.$table.attr( "id", pluginName + "-" + Math.round( Math.random() * 10000 ) );
    }

    this.createToolbar();

    var colstart = this._initCells();

    this.$table.trigger( events.create, [ this.mode, colstart ] );
  };

  Table.prototype._initCells = function() {
    var colstart,
      thrs = this.table.querySelectorAll( "thead tr" ),
      self = this;

    $( thrs ).each( function(){
      var coltally = 0;

      $( this ).children().each( function(){
        var span = parseInt( this.getAttribute( "colspan" ), 10 ),
          sel = ":nth-child(" + ( coltally + 1 ) + ")";

        colstart = coltally + 1;

        if( span ){
          for( var k = 0; k < span - 1; k++ ){
            coltally++;
            sel += ", :nth-child(" + ( coltally + 1 ) + ")";
          }
        }

        // Store "cells" data on header as a reference to all cells in the same column as this TH
        this.cells = self.$table.find("tr").not( $( thrs ).eq( 0 ) ).not( this ).children( sel );
        coltally++;
      });
    });

    return colstart;
  };

  Table.prototype.refresh = function() {
    this._initCells();

    this.$table.trigger( events.refresh );
  };

  Table.prototype.createToolbar = function() {
    // Insert the toolbar
    // TODO move this into a separate component
    var $toolbar = this.$table.prev( '.' + classes.toolbar );
    if( !$toolbar.length ) {
      $toolbar = $( '<div>' )
        .addClass( classes.toolbar )
        .insertBefore( this.$table );
    }
    this.$toolbar = $toolbar;

    if( this.mode ) {
      this.$toolbar.addClass( 'mode-' + this.mode );
    }
  };

  Table.prototype.destroy = function() {
    // Don’t remove the toolbar. Some of the table features are not yet destroy-friendly.
    this.$table.prev( '.' + classes.toolbar ).each(function() {
      this.className = this.className.replace( /\bmode\-\w*\b/gi, '' );
    });

    $( window ).off( 'resize.' + this.$table.attr( 'id' ) );

    // other plugins
    this.$table.trigger( events.destroy, [ this.mode ] );

    this.$table.removeAttr( 'data-mode' );

    this.$table.removeData( pluginName );
  };

  // Collection method.
  $.fn[ pluginName ] = function() {
    return this.each( function() {
      var $t = $( this );

      if( $t.data( pluginName ) ){
        return;
      }

      var table = new Table( this );
      $t.data( pluginName, table );
    });
  };

  $( document ).on( "enhance.tablesaw", function( e ) {
    $( e.target ).find( initSelector )[ pluginName ]();
  });

}( jQuery ));

;(function( $ ) {
  var pluginName = "tablesawbtn",
    initSelector = ".button",
    methods = {
      _create: function(){
        return $( this ).each(function() {
          $( this )
            .trigger( "beforecreate." + pluginName )
            [ pluginName ]( "_init" )
            .trigger( "create." + pluginName );
        });
      },
      _init: function(){
        var oEl = $( this ),
          sel = this.getElementsByTagName( "select" )[ 0 ];

        if( sel ) {
          $( this )
            .addClass( "btn-select" )
            [ pluginName ]( "_select", sel );
        }
        return oEl;
      },
      _select: function( sel ) {
        var update = function( oEl, sel ) {
          var opts = $( sel ).find( "option" ),
            label, el, children;

          opts.each(function() {
            var opt = this;
            if( opt.selected ) {
              label = document.createTextNode( opt.text );
            }
          });

          children = oEl.childNodes;
          if( opts.length > 0 ){
            for( var i = 0, l = children.length; i < l; i++ ) {
              el = children[ i ];

              if( el && el.nodeType === 3 ) {
                oEl.replaceChild( label, el );
              }
            }
          }
        };

        update( this, sel );
        $( this ).bind( "change refresh", function() {
          update( this, sel );
        });
      }
    };

  // Collection method.
  $.fn[ pluginName ] = function( arrg, a, b, c ) {
    return this.each(function() {

    // if it's a method
    if( arrg && typeof( arrg ) === "string" ){
      return $.fn[ pluginName ].prototype[ arrg ].call( this, a, b, c );
    }

    // don't re-init
    if( $( this ).data( pluginName + "active" ) ){
      return $( this );
    }

    // otherwise, init

    $( this ).data( pluginName + "active", true );
      $.fn[ pluginName ].prototype._create.call( this );
    });
  };

  // add methods
  $.extend( $.fn[ pluginName ].prototype, methods );

  $( document ).on( "enhance", function( e ) {
    $( initSelector, e.target )[ pluginName ]();
  });

}( jQuery ));

;(function( win, $, undefined ){


  function createSwipeTable( $table ){

    var $btns = $( "<div class='tablesaw-advance'></div>" ),
      $prevBtn = $( "<a href='#' class='tablesaw-nav-btn left' title='Previous Column'></a>" ).appendTo( $btns ),
      $nextBtn = $( "<a href='#' class='tablesaw-nav-btn right' title='Next Column'></a>" ).appendTo( $btns ),
      hideBtn = 'disabled',
      persistWidths = 'tablesaw-fix-persist',
      $headerCells = $table.find( "thead th" ),
      $headerCellsNoPersist = $headerCells.not( '[data-priority="persist"]' ),
      headerWidths = [],
      $head = $( document.head || 'head' ),
      tableId = $table.attr( 'id' ),
      // TODO switch this to an nth-child feature test
      isIE8 = $( 'html' ).is( '.ie-lte8' );

    // Calculate initial widths
    $table.css('width', 'auto');
    $headerCells.each(function() {
      headerWidths.push( $( this ).outerWidth() );
    });
    $table.css( 'width', '' );

    $btns.appendTo( $table.prev( '.tablesaw-bar' ) );

    $table.addClass( "tablesaw-swipe" );

    if( !tableId ) {
      tableId = 'tableswipe-' + Math.round( Math.random() * 10000 );
      $table.attr( 'id', tableId );
    }

    function $getCells( headerCell ) {
      return $( headerCell.cells ).add( headerCell );
    }

    function showColumn( headerCell ) {
      $getCells( headerCell ).removeClass( 'tablesaw-cell-hidden' );
    }

    function hideColumn( headerCell ) {
      $getCells( headerCell ).addClass( 'tablesaw-cell-hidden' );
    }

    function persistColumn( headerCell ) {
      $getCells( headerCell ).addClass( 'tablesaw-cell-persist' );
    }

    function isPersistent( headerCell ) {
      return $( headerCell ).is( '[data-priority="persist"]' );
    }

    function unmaintainWidths() {
      $table.removeClass( persistWidths );
      $( '#' + tableId + '-persist' ).remove();
    }

    function maintainWidths() {
      var prefix = '#' + tableId + ' ',
        styles = [],
        tableWidth = $table.width();

      $headerCells.each(function( index ) {
        var width;
        if( isPersistent( this ) ) {
          width = $( this ).outerWidth();

          // Only save width on non-greedy columns (take up less than 75% of table width)
          if( width < tableWidth * 0.75 ) {
            styles.push( prefix + ' .tablesaw-cell-persist:nth-child(' + ( index + 1 ) + ') { width: ' + width + 'px; }' );
          }
        }
      });

      unmaintainWidths();
      $table.addClass( persistWidths );
      $head.append( $( '<style>' + styles.join( "\n" ) + '</style>' ).attr( 'id', tableId + '-persist' ) );
    }

    function getNext(){
      var next = [],
        checkFound;

      $headerCellsNoPersist.each(function( i ) {
        var $t = $( this ),
          isHidden = $t.css( "display" ) === "none" || $t.is( ".tablesaw-cell-hidden" );

        if( !isHidden && !checkFound ) {
          checkFound = true;
          next[ 0 ] = i;
        } else if( isHidden && checkFound ) {
          next[ 1 ] = i;

          return false;
        }
      });

      return next;
    }

    function getPrev(){
      var next = getNext();
      return [ next[ 1 ] - 1 , next[ 0 ] - 1 ];
    }

    function nextpair( fwd ){
      return fwd ? getNext() : getPrev();
    }

    function canAdvance( pair ){
      return pair[ 1 ] > -1 && pair[ 1 ] < $headerCellsNoPersist.length;
    }

    function fakeBreakpoints() {
      var extraPaddingPixels = 20,
        containerWidth = $table.parent().width(),
        sum = 0;

      $headerCells.each(function( index ) {
        var $t = $( this ),
          isPersist = $t.is( '[data-priority="persist"]' );
        sum += headerWidths[ index ] + ( isPersist ? 0 : extraPaddingPixels );

        if( isPersist ) {
          // for visual box-shadow
          persistColumn( this );
          return;
        }

        if( sum > containerWidth ) {
          hideColumn( this );
        } else {
          showColumn( this );
        }

      });

      if( !isIE8 ) {
        unmaintainWidths();
      }
      $table.trigger( 'tablesawcolumns' );
    }

    function advance( fwd ){
      var pair = nextpair( fwd );
      if( canAdvance( pair ) ){
        if( isNaN( pair[ 0 ] ) ){
          if( fwd ){
            pair[0] = 0;
          }
          else {
            pair[0] = $headerCellsNoPersist.length - 1;
          }
        }

        if( !isIE8 ) {
          maintainWidths();
        }

        hideColumn( $headerCellsNoPersist.get( pair[ 0 ] ) );
        showColumn( $headerCellsNoPersist.get( pair[ 1 ] ) );

        $table.trigger( 'tablesawcolumns' );
      }
    }

    $prevBtn.add( $nextBtn ).click(function( e ){
      advance( !!$( e.target ).closest( $nextBtn ).length );
      e.preventDefault();
    });

    $table
      .bind( "touchstart.swipetoggle", function( e ){
        var originX = ( e.touches || e.originalEvent.touches )[ 0 ].pageX,
          originY = ( e.touches || e.originalEvent.touches )[ 0 ].pageY,
          x,
          y;

        $( this )
          .bind( "touchmove", function( e ){
            x = ( e.touches || e.originalEvent.touches )[ 0 ].pageX;
            y = ( e.touches || e.originalEvent.touches )[ 0 ].pageY;

            if( Math.abs( x - originX ) > 15 && Math.abs( y - originY ) < 20 ) {
              e.preventDefault();
            }
          })
          .bind( "touchend.swipetoggle", function(){
            if( x - originX < 15 ){
              advance( true );
            }
            if( x - originX > -15 ){
              advance( false );
            }

            $( this ).unbind( "touchmove touchend" );
          });

      })
      .bind( "tablesawcolumns.swipetoggle", function(){
        $prevBtn[ canAdvance( getPrev() ) ? "removeClass" : "addClass" ]( hideBtn );
        $nextBtn[ canAdvance( getNext() ) ? "removeClass" : "addClass" ]( hideBtn );
      })
      .bind( "tablesawnext.swipetoggle", function(){
        advance( true );
      } )
      .bind( "tablesawprev.swipetoggle", function(){
        advance( false );
      } )
      .bind( "tablesawdestroy.swipetoggle", function(){
        var $t = $( this );

        $t.removeClass( 'tablesaw-swipe' );
        $t.prev( '.tablesaw-bar' ).find( '.tablesaw-advance' ).remove();
        $( win ).off( "resize", fakeBreakpoints );

        $t.unbind( ".swipetoggle" );
      });

    fakeBreakpoints();
    $( win ).on( "resize", fakeBreakpoints );
  }



  // on tablecreate, init
  $( document ).on( "tablesawcreate", "table", function( e, mode ){

    var $table = $( this );
    if( mode === 'swipe' ){
      createSwipeTable( $table );
    }

  } );

}( this, jQuery ));

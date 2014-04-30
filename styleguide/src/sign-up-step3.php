<?php include('modules/header.php'); ?>
<body class="not-front not-logged-in domain-nl page-register page-register-step3 l-has-sidebar">

<noscript><div id="javascript-disabled">Your JavaScript seems to be disabled, this might affect your experience on Greenpeace Greenwire.</div></noscript>

<header class="l-header header" role="banner">

  <div class="container">

    <div class="l-branding">

      <a href="#" title="Home" rel="home" class="logo"> <span class="element-invisible">Greenpeace Greenwire Nederland </span></a>

    </div>

    <div class="l-header-navigation">
      <div class="mobile-nav">
        <a id="main-menu-show" href="#primary-navigation" class="icon-menu"><span class="element-invisible">Show Navigation</span></a>
        <a id="main-menu-hide" href="#" class="icon-menu"><span class="element-invisible">Hide Navigation</span></a>
      </div>
      <div id="primary-navigation">
      <!-- remove .block for all header blocks so we can style the rest of the blocks with a single selector -->
        <div class="block-search">
          <?php include('modules/search.php'); ?>
        </div>

        <nav class="main-menu" role="navigation">
          <?php include('modules/main-menu.php'); ?>
        </nav>

      </div>

      <div class="l-secondary-navigation">
        <div class="mobile-nav">
          <a id="secondary-menu-show" href="#secondary-menu" class="icon-user">
            <span class="element-invisible">Show Navigation</span>
          </a>
          <a id="secondary-menu-hide" href="#" class="icon-user">
            <span class="element-invisible">Hide Navigation</span>
          </a>
        </div>

        <div id="secondary-navigation">

        </div>

      </div> <!-- end l-secondary-navigation -->

    </div> <!-- end l-header-navigation -->

  </div>

</header>

<div id="main" class="l-main container">

  <nav class="breadcrumb" role="navigation">

    <h2 class="element-invisible">You are here</h2>

    <ol class="breadcrumbs"> <?php // add extra class here ?>
      <li class="breadcrumb-item">You are here:</li>
      <li class="breadcrumb-item">
        <a class="breadcrumb-link" href="#">Home</a> <?php // add extra class here ?>
      </li>
      <li class="breadcrumb-item">Register</li>
    </ol>

  </nav>

  <div id="content" class="l-main-column">

    <div class="main-content">

      <i class="block-icon icon-bg-user icon-user-add"></i>
      <span class="title-prefix">Overview</span>
      <h1 id="page-title" class="block-title">Register (step 3/4)</h1>  <?php // add extra class here ?>

      <div class="content">

       <div class="progress-bar-wrapper">
          <div class="progress-bar" style="width: 50%;">Progress: 50%</div>
       </div>

       <form>

        <?php //We need to reorganise the use of form wrappers here, they should only be used to group form items, on this page on production it is used too much. ?>

        <div class="form-wrapper">
          <?php //remove extra wrapper here conditionally, is needed for autocomplete ?>
          <div class="form-item">
             <label class="form-label" for="edit-field-location-und-0-country">Country
               <span class="form-required" title="This field is required.">*</span>
             </label>
             <select class="form-select ">
               <option value="">Please select</option><option value="xx">NOT LISTED</option><option value="af">Afghanistan</option><option value="ax">Aland Islands</option><option value="al">Albania</option><option value="dz">Algeria</option><option value="as">American Samoa</option><option value="ad">Andorra</option><option value="ao">Angola</option><option value="ai">Anguilla</option><option value="aq">Antarctica</option><option value="ag">Antigua and Barbuda</option><option value="ar">Argentina</option><option value="am">Armenia</option><option value="aw">Aruba</option><option value="au">Australia</option><option value="at">Austria</option><option value="az">Azerbaijan</option><option value="bs">Bahamas</option><option value="bh">Bahrain</option><option value="bd">Bangladesh</option><option value="bb">Barbados</option><option value="by">Belarus</option><option value="be">Belgium</option><option value="bz">Belize</option><option value="bj">Benin</option><option value="bm">Bermuda</option><option value="bt">Bhutan</option><option value="bo">Bolivia, Plurinational State of</option><option value="bq">Bonaire, Sint Eustatius and Saba</option><option value="ba">Bosnia and Herzegovina</option><option value="bw">Botswana</option><option value="bv">Bouvet Island</option><option value="br">Brazil</option><option value="io">British Indian Ocean Territory</option><option value="bn">Brunei Darussalam</option><option value="bg">Bulgaria</option><option value="bf">Burkina Faso</option><option value="bi">Burundi</option><option value="kh">Cambodia</option><option value="cm">Cameroon</option><option value="ca">Canada</option><option value="cv">Cape Verde</option><option value="ky">Cayman Islands</option><option value="cf">Central African Republic</option><option value="td">Chad</option><option value="cl">Chile</option><option value="cn">China</option><option value="cx">Christmas Island</option><option value="cc">Cocos (Keeling) Islands</option><option value="co">Colombia</option><option value="km">Comoros</option><option value="cg">Congo</option><option value="cd">Congo, The Democratic Republic of the</option><option value="ck">Cook Islands</option><option value="cr">Costa Rica</option><option value="hr">Croatia</option><option value="cu">Cuba</option><option value="cw">Curaçao</option><option value="cy">Cyprus</option><option value="cz">Czech Republic</option><option value="ci">Côte d&#039;Ivoire</option><option value="dk">Denmark</option><option value="dj">Djibouti</option><option value="dm">Dominica</option><option value="do">Dominican Republic</option><option value="ec">Ecuador</option><option value="eg">Egypt</option><option value="sv">El Salvador</option><option value="gq">Equatorial Guinea</option><option value="er">Eritrea</option><option value="ee">Estonia</option><option value="et">Ethiopia</option><option value="fk">Falkland Islands (Malvinas)</option><option value="fo">Faroe Islands</option><option value="fj">Fiji</option><option value="fi">Finland</option><option value="fr">France</option><option value="gf">French Guiana</option><option value="pf">French Polynesia</option><option value="tf">French Southern Territories</option>
            </select>
          </div>

          <div class="form-item">
            <label class="form-label">
              Postal code
              <span class="form-required" title="This field is required.">*</span>
            </label>
            <input class="form-text" type="text" value="" />
          </div>

          <div class="form-item">
            <label class="form-label">
              House number
              <span class="form-required" title="This field is required.">*</span>
            </label>
            <input class="form-text" type="text" value="" />
          </div>

          <div class="form-item">
            <label class="form-label">
              Apartment number
              <span class="form-required" title="This field is required.">*</span>
            </label>
            <input class="form-text" type="text" value="" />
          </div>

          <div class="form-item">
            <label class="form-label">
              Street
              <span class="form-required" title="This field is required.">*</span>
            </label>
            <input class="form-text" type="text" value="" />
          </div>

          <div class="form-item">
            <label class="form-label">
              City
              <span class="form-required" title="This field is required.">*</span>
            </label>
            <input class="form-text" type="text" value="" />
          </div>

        <div class="wrapper">
        <div id="mobileline">

          <div class="phone-wrapper">
            <div class="form-item field-name-field-user-phone-mobile-country">
              <label class="form-label">Phone (mobile)
                <span class="form-required" title="This field is required.">*</span>
              </label>
              <select class="form-select">
                <option value="be">Belgium (+32)</option><option value="fr">France (+33)</option><option value="in">India (+91)</option><option value="nl" selected="selected">Netherlands (+31)</option><option value="ru">Russia (+7)</option><option value="us">USA (+1)</option><option value="other">Other</option>
              </select>
            </div>

            <div class="form-item field-name-field-user-phone-mobile">
              <label class="form-label element-placeholder">Phone (mobile)</label>
              <input class="form-text" type="text" value="" />
            </div>

          </div>

          <a class="phone-switch" href="#landline">I don't have a mobile phone</a>

        </div>

        <div id="landline">
          <div class="phone-wrapper">
            <div class="form-item field-name-field-user-phone-house-country">
              <label class="form-label">Phone (home)
                <span class="form-required" title="This field is required.">*</span>
              </label>
              <select class="form-select" style="width: 193px;">
                <option value="be">Belgium (+32)</option><option value="fr">France (+33)</option><option value="in">India (+91)</option><option value="nl" selected="selected">Netherlands (+31)</option><option value="ru">Russia (+7)</option><option value="us">USA (+1)</option><option value="other">Other</option>
              </select>
            </div>

            <div class="form-item field-name-field-user-phone-house">
             <label class="form-label element-placeholder">Phone (home)</label>
            <input class="form-text" type="text" value="" />
            </div>
          </div>

          <a class="phone-switch" href="#mobileline">I'd rather use my mobile number</a>
        </div>
      </div>
      </div>

        <div class="form-actions form-wrapper">
          <input class="btn btn-primary pull-right" <?php // modify all classes here ?> type="submit" value="Next">
          <input class="btn pull-left" <?php // modify all classes here ?> type="submit" value="Back to previous step">
        </div>

       </form>

      </div>

    </div>

  </div>

  <aside class="l-sidebar sidebar">

    <div class="block">

      <h2 class="block-title">Help us save Planet Earth</h2>
      <div class="content">
        <img src="images/register-step2.png" alt="Sign up" />
      </div>

    </div>

  </aside>

</div>



<footer class="l-footer">

</footer>
<!-- put js here -->
</body>
</html>

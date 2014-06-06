<?php include('modules/head.php'); ?>
<body class="not-front not-logged-in domain-nl page-register page-register-step2 l-has-sidebar">

<noscript><div id="javascript-disabled">Your JavaScript seems to be disabled, this might affect your experience on Greenpeace Greenwire.</div></noscript>

<div id="outer-wrap">
<div id="inner-wrap">

<?php include('modules/header.php'); ?>

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
      <h1 id="page-title" class="block-title">Register (step 2/4)</h1>  <?php // add extra class here ?>

      <div class="content">

       <div class="progress-bar-wrapper">
          <div class="progress-bar" style="width: 25%;">Progress: 25%</div>
       </div>

       <form>

        <?php //We need to reorganise the use of form wrappers here, they should only be used to group form items, on this page on production it is used too much. ?>

        <div class="form-wrapper">
          <?php //remove extra wrapper here conditionally, is needed for autocomplete ?>
          <div class="form-item field-name-field-user-initials">
            <label class="form-label" for="edit-field-user-initials-und-0-value">Initials</label>
            <input class="form-text" type="text" value="" name="field_user_initials[und][0][value]" >
          </div>

          <div class="form-item field-name-field-user-first-name">
            <label class="form-label" for="edit-field-user-first-name-und-0-value">First name</label>
            <input class="form-text" type="text" value="" name="field_user_first_name[und][0][value]" >
          </div>

          <div class="form-item field-name-field-user-last-name">
            <label class="form-label" for="edit-field-user-last-name-und-0-value">Last name</label>
            <input class="form-text" type="text" value="" name="field_user_last_name[und][0][value]" >
          </div>

          <div class="form-item">

            <label class="form-label" for="edit-field-user-gender-und">
              Gender
              <span class="form-required" title="This field is required.">*</span>
            </label>
              <?php //many extra wrappers can be removed ?>
              <div class="form-radios">
                <div class="form-type-radio">
                  <input class="form-radio" type="radio" id="male"value="male" name="field_user_gender[und]">
                  <label class="option" for="male">Male </label>
                </div>

                <div class="form-type-radio">
                  <input class="form-radio" type="radio" id="female" value="female" name="field_user_gender[und]">
                  <label class="option" for="female">Female </label>
                </div>

                <div class="form-type-radio">
                  <input class="form-radio" type="radio" id="irrelevant" value="irrelevant" name="field_user_gender[und]">
                  <label class="option" for="irrelevant">Not relevant </label>
                </div>

              </div> <?php // end form-radios ?>

          </div>

          <div class="form-item">

            <label class="form-label" for="edit-field-user-gender-und">
              Date of birth
              <span class="form-required" title="This fieldset is required.">*</span>
            </label>

            <div class="date-padding clearfix">
              <div class="form-item form-item-field-user-birthdate-und-0-value-month">
                <select class="form-select" name="field_user_birthdate[und][0][value][month]">
                  <option value=""></option><option value="1">Jan</option><option value="2">Feb</option><option value="3">Mar</option><option value="4" selected="selected">Apr</option><option value="5">May</option><option value="6">Jun</option><option value="7">Jul</option><option value="8">Aug</option><option value="9">Sep</option><option value="10">Oct</option><option value="11">Nov</option><option value="12">Dec</option>
                </select>
              </div>

              <div class="form-item form-item-field-user-birthdate-und-0-value-day">
                <select class="form-select" name="field_user_birthdate[und][0][value][day]">
                  <option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28" selected="selected">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option>
                </select>
              </div>

              <div class="form-item form-item-field-user-birthdate-und-0-value-year">
                <select class="form-select" name="field_user_birthdate[und][0][value][year]">
                  <option value=""></option><option value="1924">1924</option><option value="1925">1925</option><option value="1926">1926</option><option value="1927">1927</option><option value="1928">1928</option><option value="1929">1929</option><option value="1930">1930</option><option value="1931">1931</option><option value="1932">1932</option><option value="1933">1933</option><option value="1934">1934</option><option value="1935">1935</option><option value="1936">1936</option><option value="1937">1937</option><option value="1938">1938</option><option value="1939">1939</option><option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014" selected="selected">2014</option>
                </select>
              </div>

            </div>
            <div class="form-description">  We need this to verify that you are old enough to subscribe. </div>

          </div>

          <div class="form-item">

            <label class="form-label">
              Place of birth
              <span class="form-required" title="This field is required.">*</span>
            </label>

            <input class="form-text" type="text" value="" name="field_location[und][0][street]" />

          </div>

         </div>

        <div class="form-actions form-wrapper">
          <input class="button btn-primary pull-right" <?php // modify all classes here ?> type="submit" value="Next">
          <input class="button pull-left" <?php // modify all classes here ?> type="submit" value="Back to previous step">
        </div>

       </form>

      </div>

    </div>

  </div>

  <aside class="l-sidebar sidebar">

    <div class="block block-no-icon">

      <h2 class="block-title">Help us save Planet Earth</h2>
      <div class="content">
        <img src="images/register-step2.png" alt="Sign up" />
      </div>

    </div>

  </aside>

</div>

<?php include('modules/footer.php'); ?>

<!-- put js here -->
</div></div>
</body>
</html>

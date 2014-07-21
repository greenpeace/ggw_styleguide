<div class="block">
  <i class="block-icon icon-login icon-bg-action"></i>
  <h2 class="block-title">RSVP for this event</h2>
  <div class="content">

    <form>

      <p>Already a Greenwire member? <a href="#">Log in now!</a></p>
      <p>Not a member? RSVP below</p>

      <div class="form-item form-type-textfield">
        <label for="edit-firstname">First name
          <span class="form-required" title="This field is required.">*</span>
        </label>
        <input type="text" id="edit-firstname" class="form-text required" value="" tabindex="1" />
      </div>

      <div class="form-item form-type-textfield">
        <label for="edit-lastname">Last name
          <span class="form-required" title="This field is required.">*</span>
        </label>
        <input type="text" id="edit-lastname" class="form-text required" value="" tabindex="1" />
      </div>

      <div class="form-item form-type-textfield">
        <label for="edit-emailaddress">Email address
          <span class="form-required" title="This field is required.">*</span>
        </label>
        <input type="text" id="edit-emailaddress" class="form-text required" value="" tabindex="1" />
      </div>

      <div class="form-item form-type-select">
        <label for="edit-phonenumber-country">Phone (mobile)
          <span class="form-required" title="This field is required.">*</span>
        </label>
        <select tabindex="1" id="edit-phonenumber-country" class="form-select required">
          <option value="be">Belgium (+32)</option>
          <option value="fr">France (+33)</option>
          <option value="in">India (+91)</option>
          <option selected="selected" value="nl">Netherlands (+31)</option>
          <option value="ru">Russia (+7)</option>
          <option value="th">Thailand (+66)</option>
          <option value="uk">United Kingdom (+44)</option>
          <option value="us">USA (+1)</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div class="form-item form-type-textfield">
        <input tabindex="1" type="text" id="edit-phonenumber" value="" class="form-text" />
      </div>

      <div class="form-item form-type-textarea">
        <label for="edit-message">Message </label>
        <div class="form-textarea-wrapper resizable">
          <textarea tabindex="1" id="edit-message" class="form-textarea">
          </textarea>
        </div>
      </div>

      <div class="form-actions">
        <input class="button btn-primary" type="submit" value="Save" />
      </div>

    </form>
  </div>
</div>

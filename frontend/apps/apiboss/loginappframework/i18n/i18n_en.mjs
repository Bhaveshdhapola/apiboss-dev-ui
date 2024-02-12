export const i18n = {
"Title" : "Login App",
"logintagline": "Enterprise Login Application",
"loginsubtag": "Secure, integrated, and easy to use.",
"learn":"Learn More",
"Name": "Name",
"Email": "Email",
"Org": "Organization",
"DownloadAuthenticatorMsg": "Please download the Google Authenticator app on your phone. Scan this bar code and enter the code shown.",
"ResetAuthenticatorMsg": "To reset the one time code scan this barcode and enter the code shown in the Google Authenticator app. Else leave this blank to retain the old code.",
"Otp": "Code shown in the app",
"RegisterErrorOTP": "The one time code is wrong.",
"RegisterErrorExists": "The email is already registered.",
"RegisterErrorPasswordMismatch": "Passwords don't match.",
"RegisterErrorSecurity": "Security error, please contact your company's administrator for help.",
"RegisterErrorInternal": "Internal error, please retry later or contact your company's administrator for help.",
"RegisterErrorDomain": "This email domain is not allowed. Please retry with a different email.",
"Hi":"Hi,",
"NoName": "Please enter your name",
"Logout" : "Logout",
"Back" : "Back",
"Home" : "Go Home",
"LoginMsg": "Login",
"Timeout_Error": "You have been logged out due to inactivity.",
"Relogin": "Relogin here",
"RegisterMsg": "Registration",
"ResetMsg": "Reset Profile",
"ResetSuccess": "Reset was successful",
"RegisterSuccess": "Welcome {{name}}! Registration successful.",
"RegisterSuccessNeedsVerification": "Welcome {{name}}! Registration successful.<br><br>Please check your email to verify your account, as soon as possible, to prevent auto-deletion.",
"LoginSuccessNeedsVerification": "Welcome {{name}}! <br><br>Please check your email to verify your account, as soon as possible, to prevent auto-deletion.",
"UserID" : "Email",
"DesiredUserID" : "Desired User ID",
"Password" : "Password",
"PasswordAgain" : "Password again",
"SignIn" : "Login",
"BadLoginInternal" : "Login failed due to an internal error. Please retry later or contact your company's administrator for help.",
"BadLoginOTP" : "Login failed due incorrect one time code.",
"BadLoginID" : "Login failed due bad login email. Retry with the right email.",
"BadLoginPassword" : "Login failed due to bad password.",
"BadLoginDomain": "This domain is not allowed to login. Please contact your company's administrator for help.",
"LoginReset" : "Click here to reset your account.",
"LoginWasReset": "Reset instructions have been emailed to you",
"LoginWasNotReset": "Unable to reset the account. Check with your company's administrator.", 
"NotApprovedMsg": "Your account is successfully registered, but not yet approved.<br><br>Please wait for your company’s administrator to approve it.",
"FillField": "Please fill out this field.",
"PWNOTSAME": "Passwords are not the same.",
"PWMUSTBE": "Passwords must be minimum 10 characters.",
"ChangePassword": "Change password",
"ChangePhone": "Change phone",
"ChangeProfile": "Change profile",
"ManageUsersAndOrg": "Manage",
"PWCHANGEFAILED": "Password change failed.",
"PWCHANGED": "Password changed.",
"PHONECHANGEFAILED": "Code was not correct, failed.",
"ProfileChangedFailedInternal": "Profile update failed due to an internal error. Please retry later.",
"ProfileChangedFailedExists": "Profile update failed as the same ID exists. Retry with a different ID.",
"ProfileChangedFailedOTP": "Profile update failed due to a bad one time code.",
"ProfileChangedFailedSecurityError": "Profile update failed due to a security error.",
"ProfileChangedFailedDomainError": "Profile update failed due to ID containing a domain that's not allowed.",
"Register" : "Register",
"Modify" : "Modify",
"LoginTaken" : "Login ID taken",
"PasswordTooShort" : "Password too short",
"NewPassword": "New password",
"NewPasswordAgain" : "New password again",
"ShowPassword": "Show password",
"TypeAgain": "Type again",
"OK": "OK",
"Cancel": "Cancel",
"NewName": "Name",
"Rename": "Rename...",
"InternalError": "Internal error",
"Edit": "Edit",
"Delete": "Delete",
"Approve": "Approve",
"Reset": "Reset Account",
"DeleteError": "Can't delete the user {{name}} with email {{id}}, backend returned with an error.",
"ApproveError": "Can't approve the user {{name}} with email {{id}}, backend returned with an error.",
"EditErrorInternal": "Failed due to a backend error, please contact your support team.",
"EditErrorExists": "Failed due same ID existing already. Please retry or contact your support team.",
"EditErrorOTP": "Failed due wrong one time code. Please retry.",
"EditErrorSecurityError": "Failed due security error, please contact your support team.",
"EditErrorDomainError": "Failed due the domain for the new ID being not allowed. Please contact your support team.",
"EditErrorIDNotExistForUpdateError": "Failed due to bad ID for update. Please contact your support team.",
"AddErrorInternal": "Failed due to an internal error, please contact your support team.",
"AddErrorExits": "The ID already exits. Please retry with a different ID.",
"AddErrorSecurity": "Failed due to a security error, please contact your support team.",
"AddErrorDomain": "Failed due to domain error. Please recheck the domain of the ID.",
"GenericBackendError": "Failed due to a backend error, please contact your support team.",
"AddEmailError": "Account created, initial login email failed. Please ask the user {{name}} with email {{id}} to login using this URL <br> {{loginurl}}",
"ResetError": "Can't reset the user {{name}} with email {{id}}, backend returned with an error.",
"Approved": "User {{name}} with email {{id}} approved.",
"ConfirmUserDelete": "Please confirm you want to delete {{name}} with email {{id}}?",
"ConfirmUserReset": "Please confirm you want to reset {{name}} with email {{id}}?",
"Role": "Role",
"user": "User",
"admin": "Administrator",
"AddUser": "Add User",
"UnsupportedBrowser": "This browser is not supported, please contact support.",
"iOSTOTPHelpHeader": "Clicking the button below will open the Google Authenticator. Once it is open, follow these steps.",
"iOSTOTPHelp1": "Click the ⨁ icon located at the bottom,",
"iOSTOTPHelp2": "Then select “Enter a setup key”,",
"iOSTOTPHelp3": "Then type “Telemeet” into the “Account” field and select the “Paste” operation to fill the value in the “Key” field and click “Add” to setup a new code.",
"OpenGoogleAuthenticator": "Open Authenticator",
"EmailVerified": "Email successfully verified.",
"EmailNotVerified": "Email verification failed.",
"ClickHereToContinueLogin": "Click here to continue to login.",
"OrgName": "Organization name",
"OrgAddress": "Organization address",
"OrgContactName": "Contact name", 
"OrgContactEmail": "Contact email",
"OrgMainDomain": "Main domain",
"AlternateName": "Alternate name",
"AlternateDomain": "Alternate domain",
"OrgEditErrorInternal": "Error updating, internal error. Please retry later or contact support for help.",
"OrgEditErrorDomain": "Error updating the new domain is not allowed. Please contact support for help.",
"OrgFetchError": "Unable to get organization details. Please retry later or contact support for help.",
"ChangingSuborgsWillMigrateUsers": "WARNING: You have edited the list of suborganizations. This is a destructive operation that will also migrate users associated with the deleted suborganizations to the main organization. Press Cancel to avoid this. Press OK again to proceed.",
"SomeUndeletableDomainsFound": "Undeletable domains found - {{domains}}. Please restore them as they have registered users or cancel."
}
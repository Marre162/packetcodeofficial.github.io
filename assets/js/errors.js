function whitelistApplySuccess(){
    Swal.fire({
        position: 'top-end',
        type: 'success',
        title: 'Din whitelist ansökan skickades.',
        showConfirmButton: false,
        timer: 5000
      })
}

function chefApplySuccess(){
  Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Din chefsjobb ansökan skickades.',
      showConfirmButton: false,
      timer: 5000
    })
}

function staffApplySuccess(){
  Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Din staff ansökan skickades.',
      showConfirmButton: false,
      timer: 5000
    })
}

function whitelistApplyFailed(){
    Swal.fire({
        position: 'top-end',
        type: 'error',
        title: 'Din whitelist ansökan skickades ej, försök igen.',
        showConfirmButton: false,
        timer: 5000
      })
}

function reCaptchaFailed(){
  Swal.fire({
      position: 'top-end',
      type: 'error',
      title: 'Du måste fylla i reCaptcha.',
      showConfirmButton: false,
      timer: 5000
    })
}

function emailExists(){
  Swal.fire({
      position: 'top-end',
      type: 'error',
      title: 'Email adressen finns redan.',
      showConfirmButton: false,
      timer: 5000
    })
}

function usernameExists(){
  Swal.fire({
      position: 'top-end',
      type: 'error',
      title: 'Användarnamnet finns redan.',
      showConfirmButton: false,
      timer: 5000
    })
}

function accountRegister(){
  Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Kontot skapades.',
      showConfirmButton: false,
      timer: 5000
    })
}

function invalidPassword(){
  Swal.fire({
      position: 'top-end',
      type: 'error',
      title: 'Lösenordet är fel.',
      showConfirmButton: false,
      timer: 5000
    })
}

function acceptWhitelist(){
  Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Ansökningen blev godkänd.',
      showConfirmButton: false,
      timer: 5000
    })
}

function denyWhitelist(){
  Swal.fire({
      position: 'top-end',
      type: 'error',
      title: 'Ansökningen blev nekad.',
      showConfirmButton: false,
      timer: 5000
    })
}

function acceptStaff(){
  Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Staff ansökningen blev godkänd.',
      showConfirmButton: false,
      timer: 5000
    })
}

function denyStaff(){
  Swal.fire({
      position: 'top-end',
      type: 'error',
      title: 'Staff ansökningen blev nekad.',
      showConfirmButton: false,
      timer: 5000
    })
}

function acceptChef(){
  Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Chef ansökningen blev godkänd.',
      showConfirmButton: false,
      timer: 5000
    })
}

function denyChef(){
  Swal.fire({
      position: 'top-end',
      type: 'error',
      title: 'Chef ansökningen blev nekad.',
      showConfirmButton: false,
      timer: 5000
    })
}

function createUpdateSuccess(){
  Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Uppdateringen las till.',
      showConfirmButton: false,
      timer: 5000
    })
}

function createUpdateFailed(){
  Swal.fire({
      position: 'top-end',
      type: 'error',
      title: 'Uppdateringen kunde ej läggas till.',
      showConfirmButton: false,
      timer: 5000
    })
}

function createStaffSuccess(){
  Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Du la till en staff.',
      showConfirmButton: false,
      timer: 5000
    })
}

function createStaffFailed(){
  Swal.fire({
      position: 'top-end',
      type: 'error',
      title: 'Det uppstod ett problem.',
      showConfirmButton: false,
      timer: 5000
    })
}
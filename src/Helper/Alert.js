import Swal from 'sweetalert2'

export default {
    Success : (message) => {
        Swal.fire({
            position: 'top-end',
            type: 'success',
            title: message,
            showConfirmButton: false,
            timer: 1500
          })
    },
    Info : (title,message) => {
        return Swal.fire({
            type: 'info',
            title: title,
            text: message,
          })
    },
    Error : (title, message) => {
        return Swal.fire({
            type: 'error',
            title: title,
            text: message,
          })  
    }
}
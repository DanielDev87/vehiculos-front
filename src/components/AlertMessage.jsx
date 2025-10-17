import Swal from 'sweetalert2';

export function showAlert(title, text, icon = 'success') {
  Swal.fire({ title, text, icon });
}
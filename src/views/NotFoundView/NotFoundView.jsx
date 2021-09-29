import { toast } from 'react-toastify';

export default function NotFoundView() {
  return toast.error('404 Page not found', {
    toastId: '',
    position: 'top-center',
    autoClose: 2000,
  });
}

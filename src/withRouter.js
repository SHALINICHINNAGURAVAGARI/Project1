import { useNavigate } from 'react-router-dom';

export function withRouter(Component) {
  return function Wrapper(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
} 
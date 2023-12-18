import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error: any = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Ooops!</h1>
      <p>Something has gone wrong</p>
      <p>
        {error.message} || {error.message}
      </p>
    </div>
  );
}

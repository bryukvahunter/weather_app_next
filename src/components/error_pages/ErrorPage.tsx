import React from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Что-то пошло не так!</h2>
      <pre>{error.message}</pre>
      <button onClick={reset}>Попробовать снова</button>
    </div>
  );
}

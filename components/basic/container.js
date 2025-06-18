export default function Container({ children, className }) {
  return (
    <div className={`w-full lg:w-11/12 m-auto max-w-1200 ${className}`}>{children}</div>
  );
}

export default function Modal() {
  return (
    <div>
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-40 bg-white p-10">Modal in the middle</div>
    </div>
  );
}

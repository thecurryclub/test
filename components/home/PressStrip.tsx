export default function PressStrip(){
  const logos = ["As seen on", "Local favorites", "Chef-approved"];
  return (
    <div className="bg-white border-t border-b border-gray-200">
      <div className="container-max py-6 grid grid-cols-3 text-center text-sm text-gray-500">
        {logos.map(x => <div key={x}>{x}</div>)}
      </div>
    </div>
  );
}

export const LoremIpsum = ({ n = 10, className = '' }) => {
  return Array.from({ length: n }, (_, i) => (
    <div key={i} className={`text-xl my-2 ${className}`}>
      Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
    </div>
  ));
};

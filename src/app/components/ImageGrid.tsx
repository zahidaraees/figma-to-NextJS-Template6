import Image from 'next/image';

export default function ImageGrid() {
  const images = [
    "/images/Rectangle36.png",
    "/images/Rectangle37.png",
    "/images/Rectangle38.png",
    "/images/Rectangle39.png",
    "/images/Rectangle40.png",
    "/images/Rectangle41.png",
    "/images/Rectangle43.png",
    "/images/Rectangle44.png",
    "/images/Rectangle45.png",
  ];

  return (
    <div className="container mx-auto px-4 py-8 grid-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`bg-gray-200 rounded-lg overflow-hidden ${
            // Adjust grid-row-start, grid-row-end, grid-column-start, grid-column-end, width, and height based on your specific layout
            index === 0
              ? 'grid-row-start-1 grid-row-end-2 grid-column-start-1 grid-column-end-2'
              : index === 1
              ? 'grid-row-start-1 grid-row-end-2 grid-column-start-3 grid-column-end-4'
              : index === 2
              ? 'grid-row-start-2 grid-row-end-3 grid-column-start-3 grid-column-end-4'
              : index === 3
              ? 'grid-row-start-1 grid-row-end-2 grid-column-start-3 grid-column-end-3'
              : index === 4
              ? 'grid-row-start-2 grid-row-end-3 grid-column-start-3 grid-column-end-4'
              : index === 5
              ? 'grid-row-start-2 grid-row-end-3 grid-column-start-4 grid-column-end-5'
              : index === 6
              ? 'grid-row-start-1 grid-row-end-2 grid-column-start-4 grid-column-end-5'
              : index === 7
              ? 'grid-row-start-2 grid-row-end-3 grid-column-start-4 grid-column-end-5'
              : index === 8
              ? 'grid-row-start-1 grid-row-end-2 grid-column-start-5 grid-column-end-6'
              : ''
          }`}
        >
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover"
            // Adjust width and height as per your image dimensions
            width={index === 0 ? 274 : index === 1 ? 381 : index === 2 ? 451 : index === 3 ? 344 : index === 4 ? 295 : index === 5 ? 178 : index === 6 ? 290 : index === 7 ? 258 : 425}
            height={index === 0 ? 382 : index === 1 ? 323 : index === 2 ? 312 : index === 3 ? 242 : index === 4 ? 392 : index === 5 ? 242 : index === 6 ? 348 : index === 7 ? 196 : 433}
          />
        </div>
      ))}
    </div>
  );
}
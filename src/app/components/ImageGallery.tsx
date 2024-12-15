import Image from "next/image";

const images = [
  "/images/Rectangle36.png", // 0
  "/images/Rectangle37.png", // 1
  "/images/Rectangle38.png", // 2
  "/images/Rectangle39.png", // 3
  "/images/Rectangle40.png", // 4
  "/images/Rectangle41.png", // 5
  "/images/Rectangle43.png", // 6
  "/images/Rectangle44.png", // 7
  "/images/Rectangle45.png", // 8
];

const ImageGallery = () => {
  return (
    <div className="p-4">
      {/* Header Section */}
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-8">
        Share your setup with{" "}
        <span className="text-gray-600">#FuniroFurniture</span>
      </h1>

      {/* Image Grid */}
      <div
        className="grid gap-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)", // 5 columns
          gridTemplateRows: "repeat(2, auto)", // 2 rows
        }}
      >
        {/* Rectangle36 - Column 1, Row 1 */}
        <div style={{ gridColumn: "1", gridRow: "1" }}>
          <Image
            src={images[0]}
            alt="Rectangle36"
            width={78}
            height={382}
            className="rounded-lg justify-end"
          />
        </div>

        {/* Rectangle37 - Column 2, Row 1 */}
        <div style={{ gridColumn: "1", gridRow: "2" }}>
          <Image
            src={images[1]}
            alt="Rectangle37"
            width={190.5}
            height={323}
            className="rounded-lg h-full"
          />
        </div>

        {/* Rectangle38 - Column 2, Row 2 */}
        <div style={{ gridColumn: " 2", gridRow: "1" }}>
          <Image
            src={images[2]}
            alt="Rectangle38"
            width={451}
            height={312}
            className="rounded-lg"
          />
        </div>

        {/* Rectangle39 - Column 3, Row 1 */}
        <div style={{ gridColumn: "2", gridRow: "2" }}>
          <Image
            src={images[3]}
            alt="Rectangle39"
            width={344}
            height={242}
            className="rounded-lg"
          />
        </div>

        {/* Rectangle40 - Column 3, Row 1-2 (Spanning 2 rows) */}
        <div style={{ gridColumn: "3", gridRow: "1 / span 2" }}>
          <Image
            src={images[4]}
            alt="Rectangle40"
            width={295}
            height={392}
            className="rounded-lg"
          />
        </div>

        {/* Rectangle41 - Column 4, Row 2 */}
        <div style={{ gridColumn: "4", gridRow: "2" }}>
          <Image
            src={images[5]}
            alt="Rectangle41"
            width={178}
            height={242}
            className="rounded-lg"
          />
        </div>

        {/* Rectangle43 - Column 4, Row 1 */}
        <div style={{ gridColumn: "4", gridRow: "1" }}>
          <Image
            src={images[6]}
            alt="Rectangle43"
            width={290}
            height={348}
            className="rounded-lg"
          />
        </div>

        {/* Rectangle44 - Column 4-5, Row 2 (Spanning 2 columns) */}
        <div style={{ gridColumn: "5", gridRow: "2" }}>
          <Image
            src={images[7]}
            alt="Rectangle44"
            width={258}
            height={196}
            className="rounded-lg w-full"
          />
        </div>

        {/* Rectangle45 - Column 5, Row 1 */}
        <div style={{ gridColumn: "5", gridRow: "1" }}>
          <Image
            src={images[8]}
            alt="Rectangle45"
            width={425}
            height={433}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

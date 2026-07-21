import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ImageGallery({ images }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.caption || `proof-${index}`}
            className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-80 transition"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setSelected(img);
            }}
          />
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setSelected(null);
          }}>
          <div className="max-w-3xl w-full max-h-[90vh] flex flex-col items-center">
            <img
              src={selected.src}
              alt={selected.caption}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg"
            />
            {selected.caption && (
              <p className="text-white text-center mt-2 text-sm">{selected.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      caption: PropTypes.string
    })
  ).isRequired
};
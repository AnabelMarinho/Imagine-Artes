import React from "react";

const Galeria = () => {
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
          let ul = $refs.logos;
          ul.insertAdjacentHTML('afterend', ul.outerHTML);
          ul.nextSibling.setAttribute('aria-hidden', 'true');
      })"
      className="w-full inline-flex flex-nowrap overflow-hidden"
      >
      <ul
        x-ref="logos"
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li>
          <img src="/img/obra1.jpeg" className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px] object-cover rounded-sm" alt="Obra 1" />
        </li>
        <li>
          <img src="/img/obra2.jpeg" className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px] object-cover rounded-sm" alt="Obra 2" />
        </li>
        <li>
          <img src="/img/obra3.jpeg" className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px] object-cover rounded-sm" alt="Obra 3" />
        </li>
        <li>
          <img src="/img/obra4.jpeg" className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]  sm:w-[300px] sm:h-[300px] object-cover rounded-sm" alt="Obra 4" />
        </li>
        <li>
          <img src="/img/obra4-1.jpeg" className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px] object-cover rounded-sm" alt="Obra 4.1" />
        </li>
      </ul>
      <ul
        x-ref="logos"
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>
          <img src="/img/obra1.jpeg" className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px] object-cover rounded-sm" alt="Obra 1" />
        </li>
        <li>
          <img src="/img/obra2.jpeg" className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px] object-cover rounded-sm" alt="Obra 2" />
        </li>
        <li>
          <img src="/img/obra3.jpeg" className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px] object-cover rounded-sm" alt="Obra 3" />
        </li>
        <li>
          <img src="/img/obra4.jpeg" className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px] object-cover rounded-sm" alt="Obra 4" />
        </li>
        <li>
          <img src="/img/obra4-1.jpeg" className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] sm:w-[300px] sm:h-[300px] object-cover rounded-sm" alt="Obra 4.1" />
        </li>
      </ul>
    </div>
  );
};

export default Galeria;

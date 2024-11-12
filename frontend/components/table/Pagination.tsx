// components/Pagination.tsx
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrevious: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onNext, onPrevious }) => (
  <div className="mt-8 flex justify-center items-center space-x-4">
    <button
      disabled={currentPage === 1}
      onClick={onPrevious}
      className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 transition hover:bg-gray-300"
    >
      Anterior
    </button>
    <span className="text-gray-600">Página {currentPage} de {totalPages}</span>
    <button
      disabled={currentPage === totalPages}
      onClick={onNext}
      className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 transition hover:bg-gray-300"
    >
      Próxima
    </button>
  </div>
);

export default Pagination;

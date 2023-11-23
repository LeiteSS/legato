import './Paginacao.css';

import React from 'react'

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBackIcon from '@mui/icons-material/NavigateBefore';

const Paginacao = ({ currentPage, onPageChange, totalPages }: any) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container-paginacao">

            <a
                className={`page ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            >
                <NavigateBackIcon />
            </a>

            {pageNumbers.map((number) => (
                <a
                    key={number}
                    className={`page ${currentPage === number ? 'active' : ''}`}
                    onClick={() => onPageChange(number)}
                >
                    {number}
                </a>
            ))}

            <a
                className={`page ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
            >
                <NavigateNextIcon />
            </a>
        </div>
    );
};

export default Paginacao;
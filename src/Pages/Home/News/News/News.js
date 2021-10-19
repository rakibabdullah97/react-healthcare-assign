import React from 'react';
import Blog from '../Blog/Blog';
import CovidChart from '../CovidChart/CovidChart';

const News = () => {
    return (
        <div id='news' className="bg-Secondary border border-danger row">
            <CovidChart></CovidChart>
            <Blog></Blog>
        </div>
    );
};

export default News;
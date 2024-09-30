import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// @ts-ignore

import $ from 'jquery';
import 'bootstrap-select';

// Import styles
import './styles/style.scss';
import './global.css';
import './styles/animate.css';
import './styles/drift-basic.min.css';
import './styles/image-compare-viewer.min.css';
import './styles/bootstrap.min.css';
import './styles/photoswipe.css';
import './styles/styles.css';
import './styles/swiper-bundle.min.css';

import './js/bootstrap.min.js';
import './js/bootstrap-select.min.js';
import './js/carousel.js';
import "/src/js/count-down.js";
import "/src/js/drift.min.js";
import "/src/js/jquery-validate.js";
import "/src/js/jquery.min.js";
import "/src/js/lazysize.min.js";
import "/src/js/main.js";
import "/src/js/shop.js";
import "/src/js/wow.min.js";
import "/src/js/swiper-bundle.min.js";
import "/src/js/shop.js";





import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
     
);

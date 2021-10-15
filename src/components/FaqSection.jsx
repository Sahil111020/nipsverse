import React from 'react';
import '../css/index.css'

function FaqSection() {
    return (
            <div className="pt-16 w-6/12 mx-auto mb-60 flex flex-col items-center text-gray-100 font-poppins">
                <h1 className="text-4xl px-16 pb-4">Freaquently Asked Questions</h1>
                <details>
                    <summary>Lorem ipsum dolor sit amet?</summary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem veniam neque cum velit id ad molestias. Iusto quaerat iste alias ea consequatur temporibus ex distinctio.</p>
                </details>
                <details>
                    <summary>Lorem ipsum dolor sit amet?</summary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem veniam neque cum velit id ad molestias. Iusto quaerat iste alias ea consequatur temporibus ex distinctio.</p>
                </details>
                <details>
                    <summary>Lorem ipsum dolor sit amet?</summary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem veniam neque cum velit id ad molestias. Iusto quaerat iste alias ea consequatur temporibus ex distinctio.</p>
                </details>
                <details>
                    <summary>Lorem ipsum dolor sit amet?</summary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem veniam neque cum velit id ad molestias. Iusto quaerat iste alias ea consequatur temporibus ex distinctio.</p>
                </details>
            </div>
    );
}

export default FaqSection;
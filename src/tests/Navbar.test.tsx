import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Navbar } from "../components/Navbar";


let container = null;

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})


afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

test('renders Navbar', ()=> {
    act(() => {
        render(<Navbar />, container)
    });

    const brandLogo = container.querySelector('.brand-log');
    const img = container.querySelector('img');

    expect(brandLogo.contains(img)).toEqual(true);
    expect(brandLogo.textContent).toBe("FILMS PROJECT");
    expect(img.getAttribute('id')).toBe('logo');
    expect(img.getAttribute('src')).toBe('https://www.flaticon.com/svg/static/icons/svg/3773/3773702.svg');
})

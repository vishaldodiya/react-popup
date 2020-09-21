import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Click an image/i);
  expect(headerElement).toBeInTheDocument();
});

describe("Image Click", () => {
  it("Opens image popup, and closes it", () => {
    const { container } = render(<App />);

    const images = container.querySelectorAll(".App--item");

    // Expect image list length equal to 5.
    expect(images.length).toBe(5);

    fireEvent.click(images[0]);
    const popup = container.querySelector(".popup");

    // Expect popup element in the DOM.
    expect(popup).toBeInTheDocument();

    const image = images[0]?.querySelector(".ImagePreview--image");
    const popupImage = popup?.querySelector("img");

    // The image inside popup should have same URL as the image which is clicked.
    expect(image?.getAttribute("style")).toContain(popupImage?.src);

    const popupOverlay = popup?.querySelector(".popup__overlay")

    fireEvent.click(popupOverlay || window);

    // Don't expect popup overlay in the DOM.
    expect(popup).not.toBeInTheDocument();
  })
})

describe("Popup Image Change", () => {
  it("Change image as we click left and right arrow", () => {
    const { container } = render(<App />);

    const images = container.querySelectorAll(".App--item");

    fireEvent.click(images[0]);
    let popup = container.querySelector(".popup");

    // Expect popup element in the DOM.
    expect(popup).toBeInTheDocument();

    let image = images[0]?.querySelector(".ImagePreview--image");
    let popupImage = popup?.querySelector("img");

    // The image inside popup should have same URL as the image which is clicked.
    expect(image?.getAttribute("style")).toContain(popupImage?.src);

    // Right arrow click.
    fireEvent.keyDown(window, {keyCode: 39});

    image = images[1]?.querySelector(".ImagePreview--image");
    popupImage = popup?.querySelector("img");

    // The image inside popup should have same URL as the image at index 1.
    expect(image?.getAttribute("style")).toContain(popupImage?.src);

    // Right left click twice.
    fireEvent.keyDown(window, {keyCode: 37});
    fireEvent.keyDown(window, {keyCode: 37});

    image = images[4]?.querySelector(".ImagePreview--image");
    popupImage = popup?.querySelector("img");

    // The image inside popup should have same URL as the image at index 4.
    expect(image?.getAttribute("style")).toContain(popupImage?.src);

    // Esc button click.
    fireEvent.keyDown(window, {keyCode: 27});

    // Don't expect popup overlay in the DOM.
    expect(popup).not.toBeInTheDocument();

    fireEvent.click(images[4]);
    popup = container.querySelector(".popup");

    // Expect popup element in the DOM.
    expect(popup).toBeInTheDocument();

    // Right arrow click.
    fireEvent.keyDown(window, {keyCode: 39});

    image = images[0]?.querySelector(".ImagePreview--image");
    popupImage = popup?.querySelector("img");

    // The image inside popup should have same URL as the image at index 0.
    expect(image?.getAttribute("style")).toContain(popupImage?.src);
  })
})

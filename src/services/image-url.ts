import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

export function getCroppedImageUrl(url?: string, width = 600, height = 400) {
  if (!url) return noImage;

  const target = "media/";
  return url.split(target).join(`${target}crop/${width}/${height}/`);
}

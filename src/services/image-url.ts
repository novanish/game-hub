export function getCroppedImageUrl(url: string, width = 600, height = 400) {
  const target = "media/";
  return url.split(target).join(`${target}crop/${width}/${height}/`);
}

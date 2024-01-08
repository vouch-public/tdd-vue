export const formatName = (name, gender) => {
  if (gender === "male") {
    return `Mr. ${name}`;
  } else if (gender === "female") {
    return `Mrs. ${name}`;
  }
  return name;
}

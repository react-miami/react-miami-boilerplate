// Set the page `<title>`.
export default function(props) {
  // Fallback site title.
  const suffix = 'React Miami Boilerplate';
  const divider = ' | ';

  // Used in conditional.
  let title = props.route.title;

  // Is there a title?
  if (title) {
    title = suffix ? title + divider + suffix : title;

  // If no title exists.
  } else {
    title = suffix;
  }

  // Set title.
  document.title = title;
}

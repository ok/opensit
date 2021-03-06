/* eslint-disable */
// credits: https://stackoverflow.com/a/8260383
export function getYtVideoId(url) {
  var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[2].length == 11) {
    return match[2];
  } else {
    return "error";
  }
}

export function getYtEmbedUrl(url) {
  return "https://www.youtube-nocookie.com/embed/" + getYtVideoId(url) + "?rel=0";
}

export function getYtThumbnailUrl(url) {
  return "https://img.youtube.com/vi/" + getYtVideoId(url) + "/mqdefault.jpg";
}

// credits: https://stackoverflow.com/a/5782563
export function getSlug(title) {
  title = title.replace(/^\s+|\s+$/g, ''); // trim
  title = title.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  var to   = "aaaaaeeeeeiiiiooooouuuunc------";
  for (var i=0, l=from.length ; i<l ; i++) {
    title = title.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  title = title.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return title;
}

// credits: https://stackoverflow.com/questions/8206269/how-to-remove-http-from-a-url-in-javascript
export function getDisplayUrl(url) {
  return url.replace(/(^\w+:|^)\/\//, '');
}

export function getDisplayName(name) {
  return name.replace(/_/g, ' ');
}

// gatsby-node doesn't support component import, which sucks!
export function printData(data) {
  console.log(JSON.stringify(data))
  console.log("---END---")
}
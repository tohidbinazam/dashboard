const timeAgo = (IOSDateString) => {
  const date = new Date(IOSDateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffMinutes = Math.round(diffTime / (1000 * 60));
  const diffHours = Math.round(diffTime / (1000 * 60 * 60));
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.round(diffTime / (1000 * 60 * 60 * 24 * 30));
  const diffYears = Math.round(diffTime / (1000 * 60 * 60 * 24 * 365));
  if (diffMinutes < 1) {
    return `Just now`;
  } else if (diffMinutes < 60) {
    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
  } else if (diffHours < 24) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  } else if (diffDays < 30) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  } else if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
  } else {
    return `${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
  }
};

export default timeAgo;

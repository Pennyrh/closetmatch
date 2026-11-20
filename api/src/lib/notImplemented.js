export function notImplemented(story) {
  return (req, res) => {
    res.status(501).json({ error: 'Not implemented yet', story });
  };
}

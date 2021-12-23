using System.Collections.Generic;
using System.Linq;

namespace com.chrisrichards
{
    public static class Store
    {
        private static readonly List<MediaFile> _mediaFiles = new List<MediaFile>();

        public static IReadOnlyList<MediaFile> GetMediaFiles() {
            return _mediaFiles
                .OrderBy(f => f.FileName)
                .ToList()
                .AsReadOnly();
        }

        public static MediaFile GetMediaFileById(string id) {
            return _mediaFiles.SingleOrDefault(f => f.Id == id);
        }

        public static void AddMediaFile(MediaFile mediaFile) {
            _mediaFiles.Add(mediaFile);
        }

        public static void RemoveMediaFile(string id) {
            var mediaFile = _mediaFiles.Single(f => f.Id == id);
            _mediaFiles.Remove(mediaFile);
        }
    }
}
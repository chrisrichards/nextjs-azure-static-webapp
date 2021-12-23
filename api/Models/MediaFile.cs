using System;

namespace com.chrisrichards
{

    public class MediaFile
    {
        public string Id { get; set; } = Guid.NewGuid().ToString("n");
        public string FileName { get; set; }
        public string Description { get; set; }
        public Uri SourceUrl { get; set; }
        public Uri Url { get; set; }
        public MediaFileStatus Status { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
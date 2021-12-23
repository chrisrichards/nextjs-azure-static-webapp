using System;

namespace com.chrisrichards
{

    public class MediaFile
    {
        public string Id { get; set; } = Guid.NewGuid().ToString("n");
        public string FileName { get; set; }
        public string Description { get; set; }
        public string SourceUrl { get; set; }
        public string Url { get; set; }
        public MediaFileStatus Status { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
import type { Note } from "../data/Notes";

function parseNoteDate(date: string): number {
  if (!date) return 0;

  const [year, month, day] = date.split("/").map(Number);

  if (!year || !month || !day) return 0;

  return new Date(year, month - 1, day).getTime();
}

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}

export default function NoteList({ notes }: { notes: Note[] }) {
  const sortedNotes = [...notes].sort(
    (a, b) => parseNoteDate(b.date) - parseNoteDate(a.date)
  );

  return (
    <div className="features">
      {sortedNotes.map((note) => (
        <article key={note.title}>
          <div className="inner">
            <h4>
              {note.href ? (
                <a
                  href={note.href}
                  target={isExternalHref(note.href) ? "_blank" : undefined}
                  rel={isExternalHref(note.href) ? "noreferrer" : undefined}
                >
                  {note.title}
                </a>
              ) : (
                note.title
              )}
            </h4>

            {note.description && <p>{note.description}</p>}

            {note.date && (
              <p className="resource-date">Last updated: {note.date}</p>
            )}
            
            {note.links && note.links.length > 0 && (
              <p className="resource-links">
                {note.links.map((link, index) => (
                  <span key={`${note.title}-${link.href}`}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                    {index < note.links!.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

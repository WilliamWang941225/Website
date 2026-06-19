import type { Resource } from "../data/resources";

function parseResourceDate(date: string): number {
  if (!date) return 0;

  const [year, month, day] = date.split("/").map(Number);

  if (!year || !month || !day) return 0;

  return new Date(year, month - 1, day).getTime();
}

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:");
}

export default function ResourceList({ resources }: { resources: Resource[] }) {
  const sortedResources = [...resources].sort(
    (a, b) => parseResourceDate(b.date) - parseResourceDate(a.date)
  );

  return (
    <div className="features">
      {sortedResources.map((resource) => (
        <article key={resource.title}>
          <div className="inner">
            <h4>
              {resource.href ? (
                <a
                  href={resource.href}
                  target={isExternalHref(resource.href) ? "_blank" : undefined}
                  rel={isExternalHref(resource.href) ? "noreferrer" : undefined}
                >
                  {resource.title}
                </a>
              ) : (
                resource.title
              )}
            </h4>

            {resource.description && <p>{resource.description}</p>}

            {resource.date && (
              <p className="resource-date">Last updated: {resource.date}</p>
            )}
            
            {resource.links && resource.links.length > 0 && (
              <p className="resource-links">
                {resource.links.map((link, index) => (
                  <span key={`${resource.title}-${link.href}`}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                    {index < resource.links!.length - 1 ? <br /> : null}
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

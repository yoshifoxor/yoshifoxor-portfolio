import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { allSkills } from '@/lib/myData';

function DevIcon({
  T,
  skill,
}: {
  T:
    | React.ComponentType<{
        className?: string;
        size: string;
      }>
    | React.ComponentType<{
        className?: string;
        size: string;
      }>[];
  skill: { name: string; description?: string };
}) {
  return (
    <div className="p-4 sm:w-1/2 lg:w-1/3">
      <div className="flex">
        <Card className="w-full border-2 border-gray-300 bg-white shadow-md">
          <CardContent className="flex flex-col items-center">
            {Array.isArray(T) ? (
              <div className="flex flex-row">
                {T.map((Icon, index) => (
                  <Icon key={`icon-${skill.name}-${index}`} size="8rem" />
                ))}
              </div>
            ) : (
              <T size="8rem" />
            )}
            <span className="ml-4 text-center text-lg font-semibold">
              {skill.name}
              {skill.description && (
                <>
                  <Separator className="my-2 w-full" />
                  <p className="text-center text-sm text-gray-600">
                    {skill.description}
                  </p>
                </>
              )}
            </span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 px-16 text-2xl font-bold text-yellow-300">
        技術スタック
      </h1>
      {allSkills.map((category, categoryIndex) => (
        <div key={`category-${categoryIndex}`} className="mb-8">
          <h2 className="mb-4 px-16 text-xl font-semibold text-blue-300">
            {category.categoryName}
          </h2>
          <div className="-m-4 flex flex-wrap">
            {category.skills.map((element, index) => (
              <DevIcon
                key={`devicon-${categoryIndex}-${index}`}
                T={element.icon}
                skill={element}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

import {useEffect, useState} from "react";

export const CurrencyIcon = () => {
  const [components, setComponents] = useState({});

  useEffect(() => {
    const importComponents = async () => {
      try {
        // Dynamically import all components from "@bitwyre/icons"
        const module = await import("@bitwyre/icons");

        // Set the imported components in the state
        setComponents(module);
      } catch (error) {
        console.error("Error importing components:", error);
      }
    };

    // Call the function to import components
    importComponents();
  }, []);

  return (
    <>
      <h1 className="text-2xl mb-5">
        Icon Currency Components Total {Object.keys(components).length} currency
      </h1>
      <div className="flex flex-wrap gap-3">
        {Object.keys(components)
          .filter((item) => item.includes("Currency"))
          .map((componentName, index) => {
            //@ts-ignore
            const Component = components[componentName];
            // Render the component with its name as the key
            return <Component key={index} size={42} />;
          })}
      </div>
    </>
  );
};

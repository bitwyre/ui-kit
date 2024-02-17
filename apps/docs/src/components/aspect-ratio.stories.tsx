import {AspectRatio} from "@bitwyre/ui-kit";

export const MainComponent = () => {
  return (
    <div className="w-full">
      <h1 className="text-2xl mb-4">Aspect Ratio Component</h1>
      <div className="flex flex-wrap items-center gap-10">
        <div className="w-[600px] rounded-sm overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
              alt="Landscape photograph by Tobias Tullius"
            />
          </AspectRatio>
        </div>
        <div className="w-[600px] rounded-sm overflow-hidden">
          <AspectRatio ratio={16 / 9}>
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1707343848610-16f9afe1ae23?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Landscape photograph by Tobias Tullius"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

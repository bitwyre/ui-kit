import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@bitwyre/ui-kit";

export const MainComponent = () => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList className="space-x-1">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="py-1 px-2 rounded-md hover:bg-bw-navy-50">
              Folder
            </NavigationMenuTrigger>

            <NavigationMenuContent className="p-4 bg-bw-navy-800 text-white">
              <div className="grid w-96">
                <NavigationMenuLink
                  className="py-1 px-2 hover:bg-bw-navy-500 rounded-md"
                  href="#">
                  New Folder
                </NavigationMenuLink>
                <NavigationMenuLink
                  className="py-1 px-2 hover:bg-bw-navy-500 rounded-md"
                  href="#">
                  New Window
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="py-1 px-2 rounded-md hover:bg-bw-navy-50">
              File
            </NavigationMenuTrigger>

            <NavigationMenuContent className="p-4 bg-bw-navy-800 text-white">
              <div className="grid w-96">
                <NavigationMenuLink
                  className="py-1 px-2 hover:bg-bw-navy-500 rounded-md"
                  href="#">
                  New File
                </NavigationMenuLink>
                <NavigationMenuLink
                  className="py-1 px-2 hover:bg-bw-navy-500 rounded-md"
                  href="#">
                  New Window
                </NavigationMenuLink>
                <NavigationMenuLink
                  className="py-1 px-2 hover:bg-bw-navy-500 rounded-md"
                  href="#">
                  Disabled
                </NavigationMenuLink>
                <NavigationMenuLink
                  className="py-1 px-2 hover:bg-bw-navy-500 rounded-md"
                  href="#">
                  Preferences
                </NavigationMenuLink>
                <NavigationMenuLink
                  className="py-1 px-2 hover:bg-bw-navy-500 rounded-md"
                  href="#">
                  Quit
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

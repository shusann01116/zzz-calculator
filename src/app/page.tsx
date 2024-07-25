import NavBar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-center p-24">
      <div className="grid items-center justify-between">
        <NavBar />
        <div className="fixed bottom-0 left-0 w-full text-center">footer</div>
      </div>
      <div className="flex h-screen w-screen items-center justify-center space-x-4 text-sm">
        <Tabs>
          <TabsList>
            <TabsTrigger value="agent">Agent</TabsTrigger>
            <TabsTrigger value="enemy">Enemy</TabsTrigger>
          </TabsList>
          <TabsContent value="agent">Agent tab here</TabsContent>
          <TabsContent value="enemy">Enemy tab here</TabsContent>
        </Tabs>
        <Separator orientation="vertical" />
      </div>
    </main>
  );
}

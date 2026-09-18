import { StagingGate } from "@/features/staging-gate/StagingGate";
import { LandingPage } from "@/pages/LandingPage";

export default function App() {
  return (
    <StagingGate>
      <LandingPage />
    </StagingGate>
  );
}

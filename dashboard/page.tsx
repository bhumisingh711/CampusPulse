import WelcomeBanner from '@/components/welcome-banner';
import ClubRecruitments from '@/components/club-recruitments';
import Workshops from '@/components/workshops';

export const metadata = {
  title: 'CampusPulse - Dashboard',
  description: 'Discover clubs, workshops, and events on campus',
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <WelcomeBanner />
        
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ClubRecruitments />
          <Workshops />
        </div>
      </div>
    </main>
  );
}

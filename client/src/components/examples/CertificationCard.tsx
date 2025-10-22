import CertificationCard from '../CertificationCard';

export default function CertificationCardExample() {
  return (
    <div className="p-8 max-w-md">
      <CertificationCard
        name="Linux (LFS101)"
        issuer="The Linux Foundation"
      />
    </div>
  );
}

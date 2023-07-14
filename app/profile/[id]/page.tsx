import { UserProfile } from "@/common.types";
import { ProfilePage } from "@/components";
import { getUserProject } from "@/lib/actions";
type Props = {
  params: {
    id: string;
  };
};

const UserProfile = async ({ params: { id } }: Props) => {
  const result = (await getUserProject(id, 100)) as { user: UserProfile };
  if (!result?.user) {
    return <p className="no-result-text">Failed to fetch user info</p>;
  }
  return <ProfilePage user={result?.user} />;
};

export default UserProfile;

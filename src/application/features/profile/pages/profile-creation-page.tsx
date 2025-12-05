import { ProfileForm } from "@/application/features/profile/components/profile-form";

const styles = {
    wrapper: "flex justify-center items-center min-h-screen bg-background",
    container: "w-full max-w-md p-6",
    header: "text-center mb-8",
    title: "text-3xl font-semibold text-foreground",
    subtitle: "text-muted-foreground mt-2"
};

export default function ProfileCreationPage() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Complete seu perfil</h1>
                    <p className={styles.subtitle}>Precisamos de mais algumas informações sobre você</p>
                </div>
                <ProfileForm />
            </div>
        </div>
    );
}

import { ProfileForm } from "@/application/features/profile/components/profile-form";

export default function ProfileCreationPage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-background">
            <div className="w-full max-w-md p-6">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-semibold text-foreground">Complete seu perfil</h1>
                    <p className="text-muted-foreground mt-2">Precisamos de mais algumas informações sobre você</p>
                </div>
                <ProfileForm />
            </div>
        </div>
    );
}

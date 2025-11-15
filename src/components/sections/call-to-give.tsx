
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function CallToGive() {
  return (
    <section
      id="give"
      className="relative bg-primary text-primary-foreground py-20"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Support the Work of God
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Your generosity enables us to continue our mission and ministry in the
          community and beyond.
        </p>
        <div className="max-w-md mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/20">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Image
              src="https://mltlmcqkqqiubrjeasif.supabase.co/storage/v1/object/public/folders/photos/Mpesa.png"
              alt="M-Pesa Logo"
              width={100}
              height={40}
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Lipa Na M-Pesa
          </h3>
          <div className="space-y-3 text-left text-lg bg-gray-800/50 p-6 rounded-md border border-green-500/30">
            <p className="flex justify-between">
              <span className="text-gray-400">1. Go to M-Pesa Menu</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-400">2. Select 'Lipa na M-Pesa'</span>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-400">3. Pay Bill:</span>{' '}
              <strong className="text-white font-mono tracking-wider">159210</strong>
            </p>
            <p className="flex justify-between">
              <span className="text-gray-400">4. Account No:</span>{' '}
              <strong className="text-white font-mono tracking-wider">AIC Kimalel</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
    </section>
  );
}

module.exports = {
    preset: 'ts-jest',            // Jest'in TypeScript dosyalarını anlaması için.
    testEnvironment: 'jsdom',      // Testlerin tarayıcı ortamında çalışması için (React uygulamaları tarayıcıda çalışır).
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],  // Jest'in hangi dosya türlerini tanıyacağını belirtir.
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',  // TypeScript dosyalarını 'ts-jest' kullanarak dönüştür.
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],  // Testlerde Jest'in özel ayarlarını yüklemek için bir dosya (setup).
  };
  
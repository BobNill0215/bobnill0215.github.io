'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';
import { phonesData, brands, type PhoneCamera } from '@/data/phones';

interface CameraSpec {
  megapixels: string;
  aperture: string;
  focalLength: string;
  sensorSize: string;
  stabilization: string;
  features: string[];
}

function CameraSpecRow({ cameras, field, label }: { cameras: PhoneCamera[]; field: 'mainCamera' | 'ultrawide' | 'telephoto1' | 'telephoto2' | 'frontCamera'; label: string }) {
  return (
    <tr className="border-b bg-gray-50/50">
      <td className="p-3 font-medium text-gray-600">{label}</td>
      {cameras.map((phone) => {
        const cam = phone[field];
        if (!cam) return <td key={phone.id} className="p-3 text-center">-</td>;
        const value = field === 'mainCamera' || field === 'ultrawide' || field === 'telephoto1' || field === 'telephoto2' || field === 'frontCamera'
          ? (cam as CameraSpec)[field.replace('Camera', '') === 'main' ? 'megapixels' : field === 'telephoto1' || field === 'telephoto2' ? 'megapixels' : 'megapixels']
          : '';
        return <td key={phone.id} className="p-3 text-center">-</td>;
      })}
    </tr>
  );
}

function getSpecValue(cam: CameraSpec | undefined, field: keyof CameraSpec): string {
  if (!cam) return '-';
  const value = cam[field];
  if (Array.isArray(value)) return '';
  return String(value);
}

function getSpecFeatures(cam: CameraSpec | undefined): string[] {
  if (!cam) return [];
  return cam.features || [];
}

export default function PhoneCameraComparison({ phones }: { phones: PhoneCamera[] }) {
  const [compareMode, setCompareMode] = useState<'side-by-side' | 'specs'>('side-by-side');

  if (phones.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>请从左侧选择要对比的手机（最多4部）</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">对比结果 ({phones.length}部手机)</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setCompareMode('side-by-side')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              compareMode === 'side-by-side'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            并排对比
          </button>
          <button
            onClick={() => setCompareMode('specs')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              compareMode === 'specs'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            规格表对比
          </button>
        </div>
      </div>

      {compareMode === 'side-by-side' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {phones.map((phone) => (
            <div key={phone.id} className="bg-white rounded-xl shadow-sm border p-4">
              <div className="text-center mb-4">
                <h3 className="font-bold text-lg">{phone.name}</h3>
                <span className="text-sm text-gray-500">{phone.brand}</span>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">主摄</div>
                  <div className="font-semibold">{phone.mainCamera.mp}</div>
                  <div className="text-sm text-gray-600">{phone.mainCamera.aperture} · {phone.mainCamera.focalLength}</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">超广角</div>
                  <div className="font-semibold">{phone.ultrawide.mp}</div>
                  <div className="text-sm text-gray-600">{phone.ultrawide.aperture} · {phone.ultrawide.focalLength}</div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">长焦</div>
                  <div className="font-semibold">{phone.telephoto1.mp}</div>
                  <div className="text-sm text-gray-600">{phone.telephoto1.aperture} · {phone.telephoto1.focalLength}</div>
                </div>

                {phone.telephoto2 && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">超长焦</div>
                    <div className="font-semibold">{phone.telephoto2.mp}</div>
                    <div className="text-sm text-gray-600">{phone.telephoto2.aperture} · {phone.telephoto2.focalLength}</div>
                  </div>
                )}

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">前置</div>
                  <div className="font-semibold">{phone.frontCamera.mp}</div>
                  <div className="text-sm text-gray-600">{phone.frontCamera.aperture}</div>
                </div>

                <div className="border-t pt-3">
                  <div className="text-xs text-gray-500 mb-1">最大视频</div>
                  <div className="font-semibold text-blue-600">{phone.videoMax}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {['mainCamera', 'ultrawide', 'telephoto1', 'telephoto2', 'frontCamera'].map((camType) => {
            const cameras = phones.filter(p => {
              if (camType === 'telephoto2') return !!p.telephoto2;
              if (camType === 'frontCamera') return true;
              return true;
            });
            if (cameras.length === 0) return null;

            const labels: Record<string, string> = {
              mainCamera: '主摄像头',
              ultrawide: '超广角摄像头',
              telephoto1: '长焦摄像头',
              telephoto2: '超长焦摄像头',
              frontCamera: '前置摄像头',
            };

            return (
              <div key={camType} className="bg-white rounded-xl shadow-sm p-4">
                <h3 className="font-bold text-lg mb-4 pb-2 border-b">{labels[camType]}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-3 text-left font-semibold w-28">参数</th>
                        {cameras.map((phone) => (
                          <th key={phone.id} className="p-3 text-center font-semibold">{phone.name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {['megapixels', 'aperture', 'focalLength', 'sensorSize', 'stabilization'].map((field) => {
                        const fieldLabels: Record<string, string> = {
                          megapixels: '像素',
                          aperture: '光圈',
                          focalLength: '焦距',
                          sensorSize: '传感器',
                          stabilization: '防抖',
                        };
                        return (
                          <tr key={field} className="border-b">
                            <td className="p-3 font-medium text-gray-600">{fieldLabels[field]}</td>
                            {cameras.map((phone) => {
                              const cam = phone[camType as keyof PhoneCamera] as CameraSpec | undefined;
                              if (!cam) return <td key={phone.id} className="p-3 text-center">-</td>;
                              const value = cam[field as keyof CameraSpec];
                              return <td key={phone.id} className="p-3 text-center">{String(value)}</td>;
                            })}
                          </tr>
                        );
                      })}
                      <tr>
                        <td className="p-3 font-medium text-gray-600">特性</td>
                        {cameras.map((phone) => {
                          const cam = phone[camType as keyof PhoneCamera] as CameraSpec | undefined;
                          return (
                            <td key={phone.id} className="p-3">
                              <div className="flex flex-wrap gap-1">
                                {cam?.features?.map((f, i) => (
                                  <span key={i} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">{f}</span>
                                ))}
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold mb-3">视频规格对比</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 text-left">手机</th>
                    <th className="p-2 text-center">最大分辨率</th>
                    <th className="p-2 text-left">特色功能</th>
                  </tr>
                </thead>
                <tbody>
                  {phones.map(p => (
                    <tr key={p.id} className="border-b">
                      <td className="p-2 font-medium">{p.name}</td>
                      <td className="p-2 text-center font-semibold text-blue-600">{p.videoMax}</td>
                      <td className="p-2 text-sm text-gray-600">{p.videoFeatures.join(' · ')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
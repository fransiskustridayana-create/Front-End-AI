import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>ARMOR</Text>
          <Text style={styles.bellIcon}>🔔</Text>
        </View>

        {/* Status Card Utama */}
        <View style={styles.statusCard}>
          <View style={styles.shieldBadge}>
            <Text style={styles.shieldIcon}>🛡️</Text>
          </View>
          <Text style={styles.statusTitle}>YOUR IDENTITY IS PROTECTED</Text>
          
          <View style={styles.userBadge}>
            <Text style={styles.userText}>ARMOR ID: USER-001</Text>
          </View>

          {/* List Status */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Identity Lock</Text>
            <Text style={styles.activeTag}>ACTIVE</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Consent Control</Text>
            <Text style={styles.activeTag}>ACTIVE</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>AI Risk Analysis</Text>
            <Text style={styles.activeTag}>ACTIVE</Text>
          </View>

          {/* Tombol Aksi */}
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.buttonText}>AI Safety Gateway</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.buttonText}>Protect Content</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Navigasi Bawah */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIconActive}>🏠</Text>
          <Text style={styles.navLabelActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🪪</Text>
          <Text style={styles.navLabel}>Identity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📩</Text>
          <Text style={styles.navLabel}>Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>⚙️</Text>
          <Text style={styles.navLabel}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0F17',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 90,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  bellIcon: {
    fontSize: 20,
  },
  statusCard: {
    backgroundColor: '#131A26',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  shieldBadge: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#10B981',
  },
  shieldIcon: {
    fontSize: 32,
  },
  statusTitle: {
    color: '#10B981',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  userBadge: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 20,
  },
  userText: {
    color: '#94A3B8',
    fontSize: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#1E293B',
  },
  infoLabel: {
    color: '#CBD5E1',
    fontSize: 14,
  },
  activeTag: {
    color: '#10B981',
    fontWeight: 'bold',
    fontSize: 12,
  },
  primaryButton: {
    backgroundColor: '#2563EB',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  secondaryButton: {
    backgroundColor: '#4F46E5',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#131A26',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1E293B',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 18,
    opacity: 0.5,
  },
  navIconActive: {
    fontSize: 18,
  },
  navLabel: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 2,
  },
  navLabelActive: {
    color: '#2563EB',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 2,
  },
});